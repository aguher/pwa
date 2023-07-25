"use client";
import React, { useState, useEffect } from "react";

const InstallButton = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault();
      setDeferredPrompt(event);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("El usuario ha aceptado la instalación.");
        } else {
          console.log("El usuario ha rechazado la instalación.");
        }
        setDeferredPrompt(null);
      });
    }
  };

  return (
    <button className="install-button" onClick={handleInstallClick}>
      Instalar PWA
    </button>
  );
};

export default InstallButton;
