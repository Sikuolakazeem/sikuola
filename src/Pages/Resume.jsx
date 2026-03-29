// export default function Resume() {
//   const navigate = useNavigate();

//   const [open, setOpen] = useState(false);

//   // Optional: animate page opening
//   useEffect(() => {
//     setTimeout(() => setOpen(true), 50);
//   }, []);

//   return (
//     <main className="min-h-screen  bg-gray-200 flex flex-col  justify-center items-center py-8  gap-4 ">
//       <div
//         className={`
//           resume-paper bg-white shadow-2xl transition-all duration-700
//           ${open ? "opacity-100 scale-100" : "opacity-0 scale-95"}
//           w-198.5 min-h-280.75 p-18 md:p-20 overflow-x-scroll
//         `}
//       >
//         <div className="mb-6 ">
//           <h1 className="text-4xl font-bold text-border">{resumeData.name}</h1>
//           <p className="text-bg-dark mt-1">{resumeData.title}</p>
//           <p className="text-sm text-gray-500 mt-1 space-x-4">
//             {resumeData.contact.email} | {resumeData.contact.github} | {""}
//             {resumeData.contact.linkedin}
//           </p>
//         </div>
//         <hr />

//         {resumeData.summary && (
//           <section className="mb-6">
//             <h2 className="text-xl font-semibold mb-2">Summary</h2>
//             <p className="text-sm">{resumeData.summary}</p>
//           </section>
//         )}

//         <section className="mb-6">
//           <h2 className="text-xl font-semibold mb-2">Skills</h2>
//           <p className="text-sm">{resumeData.skills.join(", ")}</p>
//         </section>

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import resume from "../assets/sikuola_resume.pdf";
import { Link, useNavigate } from "react-router-dom";

// ✅ v10 + Vite MUST use this format — no CDN URLs
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

export default function Resume() {
  const navigate = useNavigate();
  const [numPages, setNumPages] = useState(null);
  const [scale, setScale] = useState(1);

  function onLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setScale(0.7);
      else if (width < 1024) setScale(0.9);
      else setScale(1);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    // the cleanup function
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center page-transition shadow-sm">
      <div className="w-full max-w-4xl flex flex-col md:flex-row justify-between items-center p-4 bg-white shadow mb-4 gap-2 md:gap-0">
        <button
          onClick={() => navigate("/page")}
          className="px-4 py-2 bg-bg-dark text-text-faint rounded w-full md:w-auto"
        >
          Back
        </button>

        <div className="flex gap-2 md:gap-3 mt-2 md:mt-0">
          <button
            onClick={() => setScale((prev) => Math.max(prev - 0.1, 0.5))}
            className="px-3 py-1 bg-gray-200 rounded"
          >
            −
          </button>
          <button
            onClick={() => setScale((prev) => Math.min(prev + 0.1, 2))}
            className="px-3 py-1 bg-gray-200 rounded"
          >
            +
          </button>

          <a
            href={resume}
            download="Sikuola_resume.pdf"
            className="px-4 py-2 bg-btn-download text-btn-text rounded"
          >
            Download PDF
          </a>
        </div>
      </div>

      <div className="flex justify-center w-full px-2 md:px-4 overflow-auto">
        <Document
          file={resume}
          onLoadSuccess={onLoadSuccess}
          onLoadError={(error) => console.error("PDF load error:", error)}
        >
          {Array.from(new Array(numPages ?? 0), (_, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              scale={scale}
              className="mx-auto mb-4 shadow-lg rounded"
            />
          ))}
        </Document>
      </div>
    </main>
  );
}
