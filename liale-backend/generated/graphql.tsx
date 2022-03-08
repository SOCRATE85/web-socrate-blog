import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Applyforcourse = {
  __typename?: 'Applyforcourse';
  areabackground: Scalars['Int'];
  areaofspecility: Scalars['String'];
  city: Scalars['String'];
  country: Scalars['String'];
  course: Scalars['String'];
  createdAt: Scalars['String'];
  dateofbirth: Scalars['String'];
  doyouemployied: Scalars['Int'];
  educationlevel: Scalars['String'];
  email: Scalars['String'];
  firstname: Scalars['String'];
  gender: Scalars['String'];
  id: Scalars['Int'];
  isreferby: Scalars['String'];
  lastname: Scalars['String'];
  phone: Scalars['String'];
  postalcode: Scalars['String'];
  promocode: Scalars['String'];
  referby: Scalars['String'];
  state: Scalars['String'];
  street1: Scalars['String'];
  street2: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Course = {
  __typename?: 'Course';
  createdAt: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['Int'];
  title: Scalars['String'];
  updatedAt: Scalars['String'];
  url: Scalars['String'];
};

export type CourseInput = {
  description: Scalars['String'];
  title: Scalars['String'];
  url: Scalars['String'];
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type InputData = {
  areabackground: Scalars['Float'];
  areaofspecility: Scalars['String'];
  city: Scalars['String'];
  country: Scalars['String'];
  course: Scalars['String'];
  dateofbirth: Scalars['DateTime'];
  doyouemployied: Scalars['Float'];
  educationlevel: Scalars['String'];
  email: Scalars['String'];
  firstname: Scalars['String'];
  gender: Scalars['String'];
  isreferby: Scalars['String'];
  lastname: Scalars['String'];
  phone: Scalars['String'];
  postalcode: Scalars['String'];
  promocode: Scalars['String'];
  referby: Scalars['String'];
  state: Scalars['String'];
  street1: Scalars['String'];
  street2: Scalars['String'];
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  changePassword: UserResponse;
  changePostStatus: Scalars['Boolean'];
  changeSliderStatus: Scalars['Boolean'];
  changeUserStatus: Scalars['Boolean'];
  createApplication?: Maybe<Applyforcourse>;
  createCourse: Course;
  createPost: Post;
  createSlider: Slider;
  deleteApplication: Scalars['Boolean'];
  deleteCourse?: Maybe<Scalars['Boolean']>;
  deletePost: Scalars['Boolean'];
  forgetPassword: Scalars['Boolean'];
  login: UserResponse;
  logout: Scalars['Boolean'];
  register: UserResponse;
  updateCourse?: Maybe<Course>;
  updatePost?: Maybe<Post>;
  updateSlider: Slider;
  uploadFile: Scalars['String'];
  vote: Scalars['Boolean'];
};


export type MutationChangePasswordArgs = {
  newPassword: Scalars['String'];
  token: Scalars['String'];
};


export type MutationChangePostStatusArgs = {
  id: Scalars['Int'];
  status: Scalars['Int'];
};


export type MutationChangeSliderStatusArgs = {
  id: Scalars['Int'];
  status: Scalars['Int'];
};


export type MutationChangeUserStatusArgs = {
  id: Scalars['Int'];
  status: Scalars['Int'];
};


export type MutationCreateApplicationArgs = {
  input: InputData;
};


export type MutationCreateCourseArgs = {
  input: CourseInput;
};


export type MutationCreatePostArgs = {
  input: PostInput;
};


export type MutationCreateSliderArgs = {
  input: SliderData;
};


export type MutationDeleteApplicationArgs = {
  id: Scalars['Float'];
};


export type MutationDeleteCourseArgs = {
  id: Scalars['Float'];
};


export type MutationDeletePostArgs = {
  id: Scalars['Float'];
};


export type MutationForgetPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  options: LoginInput;
};


export type MutationRegisterArgs = {
  options: UserInput;
};


export type MutationUpdateCourseArgs = {
  id: Scalars['Float'];
  input: CourseInput;
};


export type MutationUpdatePostArgs = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  title?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateSliderArgs = {
  id: Scalars['Float'];
  input: SliderData;
};


export type MutationUploadFileArgs = {
  file: Scalars['Upload'];
  mode: Scalars['String'];
};


export type MutationVoteArgs = {
  postId: Scalars['Int'];
  value: Scalars['Int'];
};

export type PaginatedApplyforcourse = {
  __typename?: 'PaginatedApplyforcourse';
  applyforcourses: Array<Applyforcourse>;
  hasMore: Scalars['Boolean'];
};

export type PaginatedPosts = {
  __typename?: 'PaginatedPosts';
  hasMore: Scalars['Boolean'];
  posts: Array<Post>;
};

export type PaginatedSlider = {
  __typename?: 'PaginatedSlider';
  hasMore: Scalars['Boolean'];
  sliders: Array<Slider>;
};

export type Post = {
  __typename?: 'Post';
  createdAt: Scalars['String'];
  creator: User;
  creatorId: Scalars['Float'];
  description: Scalars['String'];
  descriptionSnippet: Scalars['String'];
  id: Scalars['Int'];
  points: Scalars['String'];
  status: Scalars['Int'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  voteStatus?: Maybe<Scalars['Int']>;
};

export type PostInput = {
  description: Scalars['String'];
  title: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getApplication?: Maybe<Applyforcourse>;
  getApplicationList: PaginatedApplyforcourse;
  hello: Scalars['String'];
  me?: Maybe<User>;
  post?: Maybe<Post>;
  posts: PaginatedPosts;
  slider?: Maybe<Slider>;
  sliders: PaginatedSlider;
};


export type QueryGetApplicationArgs = {
  id: Scalars['Int'];
};


export type QueryGetApplicationListArgs = {
  cursor?: InputMaybe<Scalars['Int']>;
  limit: Scalars['Int'];
};


export type QueryPostArgs = {
  id: Scalars['Int'];
};


export type QueryPostsArgs = {
  cursor?: InputMaybe<Scalars['Int']>;
  limit: Scalars['Int'];
};


export type QuerySliderArgs = {
  id: Scalars['Int'];
};


export type QuerySlidersArgs = {
  cursor?: InputMaybe<Scalars['Int']>;
  limit: Scalars['Int'];
};

export type Slider = {
  __typename?: 'Slider';
  createdAt: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['Int'];
  images: Scalars['String'];
  status: Scalars['Int'];
  title: Scalars['String'];
  updatedAt: Scalars['String'];
  url: Scalars['String'];
};

export type SliderData = {
  description: Scalars['String'];
  images: Scalars['String'];
  title: Scalars['String'];
  url: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  city: Scalars['String'];
  country: Scalars['String'];
  createdAt: Scalars['String'];
  email: Scalars['String'];
  firstname: Scalars['String'];
  id: Scalars['Int'];
  lastname: Scalars['String'];
  phone: Scalars['String'];
  state: Scalars['String'];
  status: Scalars['Int'];
  streetaddress: Scalars['String'];
  streetaddress2: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type UserInput = {
  city: Scalars['String'];
  country: Scalars['String'];
  email: Scalars['String'];
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
  state: Scalars['String'];
  streetaddress: Scalars['String'];
  streetaddress2: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type LoginMutationVariables = Exact<{
  options: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, user?: { __typename?: 'User', id: number, email: string, firstname: string, lastname: string, phone: string, streetaddress: string, streetaddress2: string, city: string, state: string, country: string, status: number, createdAt: string, updatedAt: string } | null } };


export const LoginDocument = gql`
    mutation Login($options: LoginInput!) {
  login(options: $options) {
    errors {
      field
      message
    }
    user {
      id
      email
      firstname
      lastname
      phone
      streetaddress
      streetaddress2
      city
      state
      country
      status
      createdAt
      updatedAt
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;