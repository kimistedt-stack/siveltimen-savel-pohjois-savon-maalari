import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send } from "lucide-react";
const AIBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{
    text: "Hei! Olen Vivahde, maalausasiantuntijasi. Kysele rohkeasti talosi maalauksesta!",
    sender: "bot"
  }]);
  const [inputValue, setInputValue] = useState("");
  const handleSend = () => {
    if (!inputValue.trim()) return;
    setMessages(prev => [...prev, {
      text: inputValue,
      sender: "user"
    }]);

    // Simple response logic
    setTimeout(() => {
      let response = "Kiitos kysymyksestä! Tämä kuulostaa monimutkaiselta asialta. Antaisitko yhteystietosi, niin asiantuntijamme ottaa yhteyttä?";
      if (inputValue.toLowerCase().includes("hinta") || inputValue.toLowerCase().includes("maksa")) {
        response = "Hinnat riippuvat talon koosta ja kunnosta. Tarjoamme ilmaisen kuntokartoituksen! Anna yhteystietosi niin soitamme.";
      } else if (inputValue.toLowerCase().includes("aika") || inputValue.toLowerCase().includes("kestä")) {
        response = "Tyypillinen huoltomaalaus kestää 3-7 päivää. Tarkemman aikataulun kerromme paikan päällä. Haluatko että otamme yhteyttä?";
      }
      setMessages(prev => [...prev, {
        text: response,
        sender: "bot"
      }]);
    }, 1000);
    setInputValue("");
  };
  return <>
      <div className="fixed bottom-6 right-6 z-50">
        
      </div>

      {isOpen}
    </>;
};
export default AIBot;