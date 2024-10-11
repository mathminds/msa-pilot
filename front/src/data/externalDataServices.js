import axios from "axios";
axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;


// 파일 조회하기
export const getNewServices = async () => {
  try {
    const response = await axios.get(`/new_services`, {
    });
    return response.data;
  } catch (error) {
    console.error("Error during retrieving new services:", error);
    return [];
  }
};

export const getActiveServices = async () => {
  try {
    const response = await axios.get(`/active_services`, {
    });
    return response.data;
  
  } catch (error) {
    console.error("Error during retrieving active services:", error);
    return [];
  }
};

export const getRevokedDataProviders = async () => {
  try {
    const response = await axios.get(`/revoked_data_providers`, {
    });
    return response.data;
  } catch (error) {
    console.error("Error during retrieving revoked data providers:", error);
    return [];
  }
};

export const getServiceThirdPartyDetails = async (serviceId) => {
    console.log(serviceId);
    const response = await axios.post(`/service_third_party_details/`, {
      "service_id": serviceId
    });
    return response.data;
  } 


// // 다중파일업로드
// export const uploadFile = async (
//   threadId: string,
//   files: File[],
//   token: string,
// ) => {
//   const formData = new FormData();
//   files.forEach((file) => {
//     formData.append("files", file);
//     console.log("file", file); // 여기서 파일의 메타데이터(예: 이름, 크기 등)가 콘솔에 출력됩니다.
//   });

//   try {
//     const response = await axios.post(`/api/files/${threadId}`, formData, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     // console.log("Upload response:", response);
//     return response.data;
//   } catch (error) {
//     console.error("Error during file upload:", error);
//     throw error; // 에러를 외부로 전파
//   }
// };

// // 파일 업데이트하기
// export const updateFile = async (
//   fileId: string,
//   threadId: string,
//   file: File,
//   token: string,
// ) => {
//   const formData = new FormData();
//   formData.append("file", file);

//   try {
//     const response = await axios.patch(
//       `/api/files/${fileId}?thread_id=${threadId}`,
//       formData,
//       {
//         headers: {
//           "Content-Type": "multipart/form-data",
//           Authorization: `Bearer ${token}`,
//         },
//       },
//     );
//     console.log("Update response:", response.data);
//     return response.data;
//   } catch (error: any) {
//     console.error("Error during file update:", error.response.data);
//     throw error;
//   }
// };

// // 파일 삭제하기
// export const deleteFile = async (fileId: string, token: string) => {
//   const response = await axios.delete(`/api/files/${fileId}`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   return response.data;
// };


// export const getAllFiles = async (token: string) => {
//   const response = await axios.get("/api/files", {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   return response.data;
// };