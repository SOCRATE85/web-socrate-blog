'use strict';
import nodemailer, { TransportOptions } from 'nodemailer';
import * as SMTPTransport from 'nodemailer/lib/smtp-transport'
import { google} from 'googleapis';
import { config } from '../config';
import { GetAccessTokenResponse } from 'google-auth-library/build/src/auth/oauth2client';

const OAuth2 = google.auth.OAuth2

const OAuth_client = new OAuth2(config.clientId,config.clientSecret);
OAuth_client.setCredentials({ refresh_token: config.refreshToken});

interface AuthProps { 
    type: string; 
    user: string; 
    clientId: string; 
    clientSecret: string; 
    refreshToken: string; 
    accessToken: GetAccessTokenResponse; 
}

interface TransportOptionsProps extends  TransportOptions{
    pool?: true;
    service?: string;
    url?: string;    
    logger?: boolean;    
    maxConnections?: number;        
    maxMessages?: number;        
    rateDelta?: number;       
    rateLimit?: number;
    auth: AuthProps | SMTPTransport.AuthenticationType ;
}

export async function sendEmail(subject: string, to: string, text: string){
    const accessToken = await OAuth_client.getAccessToken();
    
    const options: TransportOptionsProps = {
        service: "gmail",
        auth: {
            type: "OAuth2",
            user: config.user,
            clientId: config.clientId,
            clientSecret: config.clientSecret,
            refreshToken: config.refreshToken,
            accessToken: accessToken
        },
        logger: false,
        
    };

    const transporter = nodemailer.createTransport(options);

    const mail_options = {
        from: `The G.O.A <${config.user}>`,
        to,
        subject,
        text,
        html: text
    };

    transporter.sendMail(mail_options, (error, result) => {
        if(error) {
            console.log("Error: ", error);
        }else{
            console.log("Success: ", result);
        }

        transporter.close();
    })
}