import PersonCard from "./PersonCard";

export default function PersonList({ attendees }) {
  return (
    <div className=" flex flex-col justify-center m-10 dark:bg-slate-900">
      <div className="grid gap-6 lg:gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 ">
        {" "}
        {attendees.map((attendee) => (
          <div key={attendee.id}>
            <PersonCard
              name={attendee.name}
              role={attendee.role}
              image={attendee.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
