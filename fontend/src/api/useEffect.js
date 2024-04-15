// useEffectGet((url) => {
//     const token = localStorage.getItem('x-auth-token');
//     console.log("Token:", token);
//     if (token) {
//       const config = {
//         headers: {
//           'x-auth-token': token
//         }
//       };
//       console.log("Config:", config);
//       axios.get(url, config) // Sửa URL endpoint để phù hợp với endpoint của bạn
//         .then(response => {
//         //   console.log("Response:", response.data.data); // Dữ liệu trả về từ server được lưu trong response.data.data
//         //   setUsers(response.data.data); // Lưu dữ liệu người dùng vào state
//         })
//         .catch(error => console.error("Error:", error));
//     }
//   }, []);

//   useEffectPost(() => {
//     const token = localStorage.getItem('x-auth-token');
//     console.log("Token:", token);
//     if (token) {
//       const config = {
//         headers: {
//           'x-auth-token': token
//         }
//       };
//       console.log("Config:", config);
//       axios.post('https://comp1640-tch2402-be.onrender.com/users', config) // Sửa URL endpoint để phù hợp với endpoint của bạn
//         .then(response => {
//           console.log("Response:", response.data.data); // Dữ liệu trả về từ server được lưu trong response.data.data
//           setUsers(response.data.data); // Lưu dữ liệu người dùng vào state
//         })
//         .catch(error => console.error("Error:", error));
//     }
//   }, []);

//   useEffectPut(() => {
//     const token = localStorage.getItem('x-auth-token');
//     console.log("Token:", token);
//     if (token) {
//       const config = {
//         headers: {
//           'x-auth-token': token
//         }
//       };
//       console.log("Config:", config);
//       axios.put('https://comp1640-tch2402-be.onrender.com/users', config) // Sửa URL endpoint để phù hợp với endpoint của bạn
//         .then(response => {
//           console.log("Response:", response.data.data); // Dữ liệu trả về từ server được lưu trong response.data.data
//           setUsers(response.data.data); // Lưu dữ liệu người dùng vào state
//         })
//         .catch(error => console.error("Error:", error));
//     }
//   }, []);

//   useEffectDelete(() => {
//     const token = localStorage.getItem('x-auth-token');
//     console.log("Token:", token);
//     if (token) {
//       const config = {
//         headers: {
//           'x-auth-token': token
//         }
//       };
//       console.log("Config:", config);
//       axios.delete('https://comp1640-tch2402-be.onrender.com/users', config) // Sửa URL endpoint để phù hợp với endpoint của bạn
//         .then(response => {
//           console.log("Response:", response.data.data); // Dữ liệu trả về từ server được lưu trong response.data.data
//           setUsers(response.data.data); // Lưu dữ liệu người dùng vào state
//         })
//         .catch(error => console.error("Error:", error));
//     }
//   }, []);
  