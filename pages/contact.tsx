import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const [inputs, setInputs] = useState({
    email: "",
    message: "",
  });

  const handleResponse = (status: any, msg: any) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        email: "",
        message: "",
      });
    } else {
      // @ts-ignore
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };

  const handleOnChange = (e: any) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };

  const handleOnSubmit = async (e: any) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    const res = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    });
    const text = await res.text();
    handleResponse(res.status, text);
  };

  return (
    <main className="mt-16 md:mt-28 text-black dark:text-gray-200 w-1/2 h-screen px-6">
      <form
        className="flex flex-col space-y-4 items-center justify-center"
        onSubmit={handleOnSubmit}
      >
        <label htmlFor="email" className="text-xl">
          Email
        </label>
        <input
          id="email"
          type="email"
          onChange={handleOnChange}
          className="zf-card p-1.5 dark:focus:border-white focus:shadow-lg"
          required
          value={inputs.email}
        />
        <label htmlFor="message" className="text-xl">
          Message
        </label>
        <textarea
          id="message"
          onChange={handleOnChange}
          className="zf-card p-4 w-full md:w-2/3 dark:focus:border-white dark:focus:shadow-blue"
          required
          rows={10}
          value={inputs.message}
        />
        <button
          type="submit"
          className="zf-card px-2 py-1 text"
          disabled={status.submitting}
        >
          {!status.submitting
            ? !status.submitted
              ? "Submit"
              : "Submitted"
            : "Submitting..."}
        </button>
      </form>
      {status.info.error && (
        <div className="error">Error: {status.info.msg}</div>
      )}
      {!status.info.error && status.info.msg && (
        <div className="success">{status.info.msg}</div>
      )}
    </main>
  );
}
