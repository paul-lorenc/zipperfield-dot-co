export {};
// import { Container } from "@/components/Container";
// import { ExpandingCard } from "@/components/ExpandingCard";
// import { useState } from "react";
// export default function Contact() {
//   const [status, setStatus] = useState({
//     submitted: false,
//     submitting: false,
//     info: { error: false, msg: null },
//   });

//   const [inputs, setInputs] = useState({
//     email: "",
//     message: "",
//   });

//   const handleResponse = (status: any, msg: any) => {
//     if (status === 200) {
//       setStatus({
//         submitted: true,
//         submitting: false,
//         info: { error: false, msg: msg },
//       });
//       setInputs({
//         email: "",
//         message: "",
//       });
//     } else {
//       // @ts-ignore
//       setStatus({
//         info: { error: true, msg: msg },
//       });
//     }
//   };

//   const handleOnChange = (e) => {
//     e.persist();
//     setInputs((prev) => ({
//       ...prev,
//       [e.target.id]: e.target.value,
//     }));
//     setStatus({
//       submitted: false,
//       submitting: false,
//       info: { error: false, msg: null },
//     });
//   };

//   const handleOnSubmit = async (e: any) => {
//     e.preventDefault();
//     setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
//     const res = await fetch("/api/send", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(inputs),
//     });
//     const text = await res.text();
//     handleResponse(res.status, text);
//   };
//   return (
//     <Container>
//       <main className="mt-20 md:mt-36 text-black dark:text-gray-200 w-full h-screen md:w-3/5 px-6">
//         <form
//           className="flex flex-col space-y-4 items-center"
//           onSubmit={handleOnSubmit}
//         >
//           <label htmlFor="email" className="text-xl">
//             Email
//           </label>
//           <input
//             id="email"
//             type="email"
//             onChange={handleOnChange}
//             className="text-black dark:text-white bg-white dark:bg-black border border-black dark:border-gray-400 p-1.5 dark:focus:border-white focus:shadow-lg"
//             required
//             value={inputs.email}
//           />
//           <label htmlFor="message" className="text-xl">
//             Message
//           </label>
//           <textarea
//             id="message"
//             onChange={handleOnChange}
//             className="text-black dark:text-white bg-white dark:bg-black border border-black dark:border-gray-400 p-4 w-full md:w-2/3 dark:focus:border-white dark:focus:shadow-blue"
//             required
//             rows={10}
//             value={inputs.message}
//           />
//           <button
//             type="submit"
//             className="border border-black dark:border-white px-2 py-1 text"
//             disabled={status.submitting}
//           >
//             {!status.submitting
//               ? !status.submitted
//                 ? "Submit"
//                 : "Submitted"
//               : "Submitting..."}
//           </button>
//         </form>
//         {status.info.error && (
//           <div className="error">Error: {status.info.msg}</div>
//         )}
//         {!status.info.error && status.info.msg && (
//           <div className="success">{status.info.msg}</div>
//         )}
//       </main>
//     </Container>
//   );
// }
