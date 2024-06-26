import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import PersonList from "./PersonList";
import { BackgroundBeams } from "./components/ui/background-beams";

export default function App() {
  const [attendees, setAttendees] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    fetch("attendees.json")
      .then((response) => response.json())
      .then((data) => setAttendees(data))
      .catch((error) =>
        console.error("Error fetching the attendees data:", error)
      );
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const filteredAttendees = attendees.filter((attendee) =>
    attendee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="py-20 sm:py-30 dark:bg-slate-900 bg-slate-200 min-h-screen">
      <BackgroundBeams />
      <div className="flex flex-col mx-auto max-w-2xl text-center justify-center">
        <h2 className="text-3xl font-bold tracking-tight text-center text-black sm:text-4xl dark:text-slate-100">
          <span className=" text-[#38bfc9]">REACT </span>NEXUS
        </h2>
        <p className="mt-4 text-lg leading-8 text-gray-400">
          Attendee List of the most awaited React Event of the year 🤩
        </p>
      </div>

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <PersonList attendees={filteredAttendees} />

      <button
        className="fixed bottom-4 right-4 p-3 m-2 text-white dark:bg-slate-800 bg-[#38bfc9] text-ellipsis font-mono rounded-full"
        onClick={toggleTheme}
      >
        {theme === "dark" ? "🌞 Light Mode" : "🌙 Dark Mode"}
      </button>
    </div>
  );
}
