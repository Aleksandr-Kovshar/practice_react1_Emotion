import PropTypes from "prop-types";
import { Event } from "components/Event/Event";
import { Bord } from "./EventBord.styled";



export const EventBord = ({ events }) => {
  return (
    <Bord>
      {events.map(({ name, location, speaker, type, time }) => (
        <Event
          key={name}
          name={name}
          location={location}
          speaker={speaker}
          type={type}
          start={time.start}
          end={time.end}
        />
      ))}
    </Bord>
  );
};

EventBord.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      speaker: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      time: PropTypes.shape({
        start: PropTypes.string.isRequired,
        end: PropTypes.string.isRequired,
      }),
    })
  ),
};
