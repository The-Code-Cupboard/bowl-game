import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about">
      <h4>Basic rules for Bowl Game:</h4>
      <ul>
        <li>
          <p>Create username</p>
        </li>
        <li>
          <p>
            Submit serveral words - a word can be a person, place or thing that others in the game are likely to
            recognize
          </p>
        </li>
        <li>
          <p>Round 1:</p>
          <ul>
            <li>
              <p>A word will be given to the person in the hotseat for 60 seconds</p>
            </li>
            <li>
              <p>
                The person in the hotseat will describe the word to their teammates using any vocabulary except the
                given word
              </p>
            </li>
            <li>
              <p>If the teammates guess the word, a point is awarded</p>
            </li>
            <li>
              <p>Round 1 is repeated by alternating teams until the list of words is exhausted</p>
            </li>
          </ul>
        </li>
        <li>
          <p>Round 2:</p>
          <ul>
            <li>
              <p>TBD</p>
            </li>
          </ul>
        </li>
        <li>The team with the highest score at the end of the game wins!</li>
      </ul>
      <br></br>
      <Link to="/">Go Back</Link>
    </div>
  );
};

export default About;
