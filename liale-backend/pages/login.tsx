import { gql, useMutation } from "@apollo/client";
import "../styles/Home.module.css";

const uploadQuery = gql`
  mutation UploadFile($file: Upload!, $mode: String!) {
    uploadFile(file: $file, mode: $mode)
  }
`;

export default function Home() {
  const [uploadFile] = useMutation(uploadQuery);

  const uploadFileHandle = async (e) => {
    console.log(e.target.files[0]);
    let file = e.target.files[0];

    if (!file) return;

    await uploadFile({
      variables: { file, mode: "slider" },
    })
      .then((result) => {
        console.log("result: ", result);
      })
      .catch((error) => {
        console.log("error: ", error.message);
      });
  };

  return (
    <div className="container">
      <input type={"file"} onChange={(e) => uploadFileHandle(e)} />
    </div>
  );
}
