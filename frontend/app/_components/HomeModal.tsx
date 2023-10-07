import axios from "axios";
import { useContext, useState } from "react";
import Context from "../../context/Context";
import report from "../_assets/pdf/Report-Pesquisa-Grey-Matter-02-mai-2023.pdf";
import "./HomeModal.css";

function HomeModal() {
  const [showModal, setShowModal] = useState(true);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const { languageId } = useContext(Context);
  const englishId = "d3761ab6-c643-40b1-9233-00802f961ce6";
  const { NEXT_PUBLIC_BACKEND_URL } = process.env;

  function handleClose() {
    setShowModal(false);
  }

  function downloadPdf() {
    const link = document.createElement("a");
    link.href = report;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      downloadPdf();
      if (!NEXT_PUBLIC_BACKEND_URL) throw new Error("Backend URL not found");
      await axios.post(NEXT_PUBLIC_BACKEND_URL, { email, name });
    } catch (error) {
      console.error(error);
    }

    setEmail("");
    setName("");
    handleClose();
  }

  return (
    <div className="container">
      {showModal && (
        <div className="modal">
          <form onSubmit={handleSubmit}>
            <div className="modal-header border-b-0">
              <h2 className="text-secondary">
                {languageId === englishId ? "RESEARCH" : "PESQUISA"}
              </h2>
            </div>
            <div className="modal-body px-5 py-4">
              <div className="pb-3">
                <p className="py-2 text-base">
                  <strong>
                    {languageId === englishId
                      ? "Subtitle in English"
                      : "Subtitle in Portuguese"}
                  </strong>
                </p>
                <p className="py-2 text-base">
                  {languageId === englishId
                    ? "Text in English"
                    : "Text in Portuguese"}
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="form-group">
                  <input
                    type="text"
                    placeholder={
                      languageId === englishId ? "Full name" : "Nome completo"
                    }
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="modal-footer border-t-0 pt-4 flex justify-center gap-4">
                <button
                  type="button"
                  onClick={handleClose}
                  className="btn-secondary"
                >
                  {languageId === englishId ? "Close" : "Fechar"}
                </button>
                <button type="submit" className="btn-primary">
                  Download
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default HomeModal;
