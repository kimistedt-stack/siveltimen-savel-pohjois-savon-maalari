import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send } from "lucide-react";

const AIBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hei! Olen Vivahde, maalausasiantuntijasi. Kysele rohkeasti talosi maalauksesta!", sender: "bot" }
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    if (!inputValue.trim()) return;
    
    setMessages(prev => [...prev, { text: inputValue, sender: "user" }]);
    
    // Simple response logic
    setTimeout(() => {
      let response = "Kiitos kysymyksestä! Tämä kuulostaa monimutkaiselta asialta. Antaisitko yhteystietosi, niin asiantuntijamme ottaa yhteyttä?";
      
      if (inputValue.toLowerCase().includes("hinta") || inputValue.toLowerCase().includes("maksa")) {
        response = "Hinnat riippuvat talon koosta ja kunnosta. Tarjoamme ilmaisen kuntokartoituksen! Anna yhteystietosi niin soitamme.";
      } else if (inputValue.toLowerCase().includes("aika") || inputValue.toLowerCase().includes("kestä")) {
        response = "Tyypillinen huoltomaalaus kestää 3-7 päivää. Tarkemman aikataulun kerromme paikan päällä. Haluatko että otamme yhteyttä?";
      }
      
      setMessages(prev => [...prev, { text: response, sender: "bot" }]);
    }, 1000);
    
    setInputValue("");
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full w-16 h-16 bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </Button>
      </div>

      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-white rounded-lg shadow-2xl border z-50 flex flex-col">
          <div className="bg-primary text-primary-foreground p-4 rounded-t-lg">
            <h3 className="font-semibold">Vivahde - Maalausapu</h3>
          </div>
          
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((msg, idx) => (
              <div key={idx} className={`${msg.sender === 'bot' ? 'text-left' : 'text-right'}`}>
                <div className={`inline-block p-3 rounded-lg max-w-xs ${
                  msg.sender === 'bot' 
                    ? 'bg-gray-100 text-gray-800' 
                    : 'bg-primary text-primary-foreground'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-4 border-t flex gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Kysy maalausasioista..."
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1"
            />
            <Button onClick={handleSend} size="sm" className="bg-accent hover:bg-accent/90">
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default AIBot;