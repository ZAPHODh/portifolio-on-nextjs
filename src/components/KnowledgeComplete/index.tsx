import { Card } from 'components/Knowledge';
import * as Styled from './styles';

export type KnowledgeCompleteProps = {
  cardComplete?: Card;
};

export const KnowledgeComplete = ({ cardComplete }: KnowledgeCompleteProps) => {
  return (
    <Styled.Wrapper>
      <h3>{cardComplete.title}</h3>
      <button
        onClick={() => {
          console.log('do nothing yet');
        }}
      >
        x
      </button>
      {cardComplete.complete.languages.map((each) => (
        <div key={each.name}>
          <img src={each.icon} alt="" />
          <div>
            <h3>{each.name}</h3>
            <div>{each.confident}</div>
          </div>
        </div>
      ))}
    </Styled.Wrapper>
  );
};
