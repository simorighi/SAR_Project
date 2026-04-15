import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./Header.css";
import { Button } from "react-bootstrap";

interface HeaderProps {
  title: React.ReactNode;
  subtitle: string;
  backgroundImage: string;
}

// Impostiamo un valore di default (es: '80vh') se la prop non viene passata
const Header: React.FC<HeaderProps> = ({
  title,
  subtitle,
  backgroundImage,
}) => {
  // 1. Creiamo un riferimento per il contenitore principale
  const container = useRef<HTMLDivElement>(null);

  // 2. Usiamo l'hook ufficiale di GSAP per React
  useGSAP(
    () => {
      // Animazione per il titolo
      gsap.from(".hero-title", {
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.2,
      });

      // Animazione per il sottotitolo (leggermente dopo)
      gsap.from(".hero-subtitle", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.5,
      });

      // Animazione per il bottone
      gsap.from(".btn-premium-filled", {
        scale: 0.9,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
        delay: 0.8,
      });
    },
    { scope: container }
  ); // L'opzione 'scope' limita la ricerca degli elementi al nostro container

  return (
    <header
      ref={container}
      className="hero-section d-flex align-items-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="hero-overlay"></div>

      <div className="container position-relative text-white">
        {/* Il resto del contenuto rimane invariato */}
        <div className="row">
          <div className="col-lg-8">
            <h1 className="display-2 hero-title mb-4">{title}</h1>
            <p className="lead hero-subtitle mb-5">{subtitle}</p>
            {/* DA METTERE IL BOTTONE */}
            <Button
              text="Scopri di più"
              backgroundColor="#c5a059"
              textColor="#ffffff"
              borderColor="#c5a059"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
