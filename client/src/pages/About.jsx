import styled from 'styled-components';
import { BorderGlow } from '../MiscStyling';
import HiveMap from './HiveMap';

const StyledContainer = styled.div`
  width: 100%;

  margin: 0;
  padding: 20px;
  width: 800px;
  max-width: 80vw;
  height: var(--size-body);
  position: relative;

  /* Background image */
  background-image: url('/images/connected_hives.jpg');
  background-size: 100% auto;
  background-position: center;
  background-repeat: no-repeat;

  h1 {
    text-align: center;
    font-size: 12vh;
    color: var(--honey);
    font-weight: bold;
    width: 100%;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }

  h3 {
    text-align: center;
    color: var(--yellow);
  }

  p {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }

  strong {
    color: var(--honey);
  }

`;

function About() {
  return (
      <StyledContainer>
        <BorderGlow>
          <h1>Hive Link</h1>
          <h3>Collaboration is the Heart of the Hive.</h3>
          <p>
            One of the first lessons I learned as a beekeeper is that having bees is easy, but keeping bees is another story…
          </p>
          <p>
            Honey bees are sensitive to a variety of factors, and as such, recordkeeping is critical to understanding the patterns and needs of the hive.
          </p>
          <p>
            Hive Link was created for beekeepers to manage hive and inspection data, connect fellow beekeepers, and learn from our bees together. If we can create a network of beekeepers and pool our records together, we will be able to better assess which factors have the highest impact on honey production and hive health, and use these findings to cultivate happier and healthier hives.
          </p>
          <p>
            After all, if there is one lesson we can take away from our honeybees, it is that <strong>we are stronger when we work together.</strong>
          </p>
        </BorderGlow>
      </StyledContainer>
  );
}

export default About;