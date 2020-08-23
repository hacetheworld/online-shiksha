// if (jsonToken !== null && jsonToken !== undefined) {
//     fetch("/api/current_user/", {
//       headers: {
//         Authorization: `JWT ${jsonToken}`,
//       },
//     })
//       .then((res) => res.json())
//       .then((json) => {
//         if (json.username !== undefined) {
//           store.dispatch(
//             userLoggedIn({
//               username: json.username,
//               isLoggedIn: true,
//             })
//           );
//         } else {
//           throw new Error("Session exipred");
//         }
//       })
//       .catch((e) => {
//         store.dispatch(
//           userLoggedIn({
//             username: "",
//             isLoggedIn: false,
//           })
//         );
//       });
//   } else {
//     store.dispatch(
//       userLoggedIn({
//         username: "",
//         isLoggedIn: false,
//       })
//     );
//   }
