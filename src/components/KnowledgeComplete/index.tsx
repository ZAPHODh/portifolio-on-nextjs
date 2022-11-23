import { Card } from 'components/Knowledge';
import { OnOfContext } from 'context/OnorOffKnowledge/Context';
import { useContext } from 'react';
import * as Styled from './styles';

export type KnowledgeCompleteProps = {
  cardComplete?: Card;
};

export const KnowledgeComplete = ({ cardComplete }: KnowledgeCompleteProps) => {
  const { dispatch } = useContext(OnOfContext);
  return (
    <Styled.Wrapper>
      <Styled.Btn
        onClick={() => {
          dispatch({ type: 'TRIGGER' });
        }}
      >
        x
      </Styled.Btn>
      {cardComplete.complete.languages.map((each) => (
        <Styled.KnowledgeContainer key={each.name}>
          <Styled.KnowledgeIcon src={each.icon} alt={each.name} />
          <div>
            <h3 style={{ maxWidth: '200px' }}>{each.name}</h3>
            <Styled.ProgressBar>
              <div
                style={{
                  width: `${each.confident}%`,
                  background: '#8E7524',
                  height: '100%',
                  borderRadius: '10px 0px 0px 10px',
                  position: 'absolute',
                  left: '-0.2rem',
                }}
              />
            </Styled.ProgressBar>
          </div>
        </Styled.KnowledgeContainer>
      ))}
    </Styled.Wrapper>
  );
};
