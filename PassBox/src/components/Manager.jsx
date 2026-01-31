import React, { useRef, useState, useEffect } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {v4 as uuidv4} from 'uuid'

const Manager = () => {
  const ref = useRef(null);
  const passwordRef = useRef(null);

  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);

  useEffect(() => {
    const passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);



  const showPassword = () => {
    if (ref.current.src.includes("eyecross")) {
      ref.current.src = "/icons/eye.gif";
      passwordRef.current.type = "text";
    } else {
      ref.current.src = "/icons/eyecross.gif";
      passwordRef.current.type = "password";
    }
  };

  const savePassword = () => {
    if (!form.site || !form.username || !form.password) {
      toast.error("All fields are required", { transition: Bounce });
      return;
    }

  

    const updated = [...passwordArray, {...form,id:uuidv4()}];
    console.log(updated)
    setPasswordArray(updated);
    localStorage.setItem("passwords", JSON.stringify(updated));

    toast.success("Password saved successfully", { transition: Bounce });

    setForm({ site: "", username: "", password: "" });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const copyText = (text) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard", { transition: Bounce });
  };
  const deleteValue = (id)=>{
    const updated_pass = passwordArray.filter((item)=> item.id!= id)
    setPasswordArray(updated_pass)
    localStorage.setItem("passwords",JSON.stringify(updated_pass))

    
  toast.success("Password deleted successfully", {
    theme: "dark",
    transition: Bounce,
  })

  }

const handleEdit = (id)=>{
    
    setForm(passwordArray.filter((i)=> i.id === id )[0])
    setPasswordArray(passwordArray.filter(item=> item.id != id))
}
  
return (
    <>
<ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
        {/* Content */}
        <div className="max-w-5xl sm:px-40 mx-auto px-6 md:px-20  py-24 text-white">
            {/* Heading */}
            <div className="mb-10 text-center">
                <h1 className="text-4xl font-bold tracking-tight">
                    <span className="text-red-900">&lt;</span>
                    Pass
                    <span className="text-red-900">Box /&gt;</span>
                </h1>

                <p className="mt-2 text-white/70 text-lg">
                    Your Own Password Manager
                </p>
            </div>

            {/* Inputs */}
            <div className="mx-auto flex max-w-2xl flex-col items-center space-y-4">
                {/* Main input */}
                <input
                    value={form.site}
                    onChange={handleChange}
                    type="text"
                    name="site"
                    id="site"
                    placeholder="URL"
                    className="
              w-full rounded-full border border-white/20 bg-white/95
              px-5 py-3 text-black
              focus:outline-none focus:ring-2 focus:ring-indigo-500
            "
                />

                {/* Secondary inputs */}
                <div className="relative flex gap-4">
                    <input
                        value={form.username}
                        onChange={handleChange}
                        type="text"
                        name="username"
                        placeholder="Username"
                        id="username"
                        className="
      w-full rounded-md border border-white/20 bg-white/95
      px-4 py-2 text-black
      focus:outline-none focus:ring-2 focus:ring-indigo-500
    "
                    />

                    <input
                        ref={passwordRef}
                        value={form.password}
                        onChange={handleChange}
                        type="password"
                        name="password"
                        placeholder="Password"
                        className=" w-full rounded-md border border-white/20 bg-white/95 px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-indigo-500
    "                   id="password"
                    />
                    {/* show password button  */}
                    <button
                        type="button"
                        onClick={showPassword}
                        className="
    absolute right-2 top-1/2 -translate-y-1/2
    cursor-pointer text-black font-bold
    hover:text-blue-950
  "
                    >
                        <img
                            ref={ref}
                            className="transition-all duration-300 ease-in-out
    active:scale-90"
                            src="./icons/eye.gif"
                            alt="toggle password"
                            width={20}
                        />
                    </button>
                </div>

                {/* Add Password button */}
                <button
                    onClick={savePassword}
                    className="
              mt-5 flex w-fit cursor-pointer items-center justify-center gap-2
              rounded-full border-3 border-lime-600 bg-green-500
              px-5 py-3 font-medium text-black
              transition-colors duration-700
              hover:bg-lime-600 hover:text-gray-600
            "
                >
                    <lord-icon
                        src="https://cdn.lordicon.com/efxgwrkc.json"
                        trigger="hover"
                        style={{ width: "32px", height: "32px" }}
                    />
                    Add Password
                </button>
            </div>

            {/* Heading Before Table */}
            <div className=" mt-10 mb-2 px-2 text-left bg-transparent  border-0 ">
                {/*Table Heading Container  */}
                <h2 className=" text-2xl font-bold ">
                    <span className="text-red-900">Pass</span>words
                </h2>
            </div>
            {/* Table Container  */}
            <div className="relative max-h-screen overflow-auto sm:max-w-6xl rounded-lg border border-white/10">
                <table className="w-full max-md:hidden  border-collapse text-left text-sm text-slate-300">
                    {/* Header */}
                    <thead className="sticky top-0 z-10 bg-slate-900 text-slate-200">
                        <tr className="border-b border-white/10">
                            <th className="px-6 py-4 font-semibold">URL</th>
                            <th className="px-6 py-4 font-semibold">Username</th>
                            <th className="px-6 py-4 font-semibold">Password</th>
                            <th className="px-6 py-4 text-right font-semibold">Action</th>
                        </tr>
                    </thead>

                    {/* Body */}
                    <tbody className="bg-slate-950">
                        {passwordArray.length === 0 ? (
                            <tr>
                                <td
                                    colSpan={4}
                                    className="
          h-40 px-6 py-10
          text-center text-white/70
          font-mono
        "
                                >
                                    No passwords to show
                                </td>
                            </tr>
                        ) : (
                            passwordArray.map(({ site, username, password,id }, i) => (
                                <tr
                                    key={id}
                                    className="hover:bg-slate-900/60 transition-colors"
                                >
                                    <td className="px-6 py-4 text-blue-400 ">
                                        <div className="flex items-center gap-2">
                                            <a href={`//${site}`} rel="noreferrer" target="_blank">
                                                {site}
                                            </a>
                                            <img
                                                onClick={() => {
                                                    copyText(site);
                                                }}
                                                src="./icons/copy-icon.png"
                                                width={15}
                                                alt="copy icon"
                                            />
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-white">
                                        <div className="flex items-center gap-2">
                                            <span>{username}</span>
                                            <img
                                                onClick={() => {
                                                    copyText(username);
                                                }}
                                                src="./icons/copy-icon.png"
                                                width={15}
                                                alt="copy icon"
                                            />
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 tracking-widest">
                                        <div className="flex items-center gap-2">
                                            <span>{password}</span>
                                            <img
                                                onClick={() => {
                                                    copyText(password);
                                                }}
                                                src="./icons/copy-icon.png"
                                                width={15}
                                                alt="copy icon"
                                            />
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-right text-blue-500 hover:text-blue-400 cursor-pointer">
                                        <div className="btns flex gap-1 justify-center items-center ">
                                            <div className="edit">
                                                <img onClick={()=>{handleEdit(id)}} src="./icons/edit.png"width={25}  alt="edit" />
                                            </div>
                                            <div className="trash">
                                                <img onClick={()=>{deleteValue(id)}} className="invert"width={25} src="./icons/trash.gif" alt="delete" />

                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>

                {/* Table On SmartPhone  */}
                {/* Mobile Password List */}
                <div className="md:hidden space-y-4">
                    {passwordArray.length === 0 ? (
                        <div className="rounded-lg bg-slate-950 border border-white/10 p-6 text-center text-white/70 font-mono">
                            No passwords to show
                        </div>
                    ) : (
                        passwordArray.map(({ site, username, password,id }, i) => (
                            <div
                                key={id}
                                className="rounded-lg bg-slate-950 border border-white/10 p-4"
                            >
                                {/* URL */}
                                <div className="mb-2">
                                    <p className="text-xl text-white/50">URL</p>
                                    <div className="tracking-widest text-white">
                                        {" "}
                                        <div className="flex items-center gap-2">
                                            <span>
                                                {" "}
                                                <a
                                                    className="text-blue-600"
                                                    href={`//${site}`}
                                                    target="_blank"
                                                >
                                                    {site}
                                                </a>
                                            </span>
                                            <img
                                                onClick={() => {
                                                    copyText(site);
                                                }}
                                                src="./icons/copy-icon.png"
                                                width={15}
                                                alt="copy icon"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Username */}
                                <div className="mb-2">
                                    <p className="text-xl text-white/50">Username</p>
                                    <div className="tracking-widest text-white">
                                        {" "}
                                        <div className="flex items-center gap-2">
                                            <span>{username}</span>
                                            <img
                                                onClick={() => {
                                                    copyText(username);
                                                }}
                                                src="./icons/copy-icon.png"
                                                width={15}
                                                alt="copy icon"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Password */}
                                <div className="mb-3">
                                    <p className="text-xl text-white/50">Password</p>
                                    <div className="tracking-widest text-white">
                                        {" "}
                                        <div className="flex items-center gap-2">
                                            <span>{password}</span>
                                            <img
                                                onClick={() => {
                                                    copyText(password);
                                                }}
                                                src="./icons/copy-icon.png"
                                                width={15}
                                                alt="copy icon"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Action */}
                                <div className="text-right">
                                    <div className="btns flex gap-3 justify-end items-center ">
                                            <div className="edit ">
                                                <img onClick={()=>{handleEdit(id)}} src="./icons/edit.png"width={30}  alt="edit" />
                                            </div>
                                            <div className="trash">
                                                <img onClick={()=>{deleteValue(id)}} className="invert"width={30} src="./icons/trash.gif" alt="delete" />

                                            </div>
                                        </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    </>
);
};

export default Manager;
