import { KnowledgeCard } from 'components/KnowledgeCard';
import { KnowledgeComplete } from 'components/KnowledgeComplete';
import { OnOfContext } from 'context/OnorOffKnowledge/Context';
import { useState, useContext } from 'react';
import * as Styled from './styles';

export type Complete = {
  languages?: { name?: string; icon?: string; confident?: number }[];
  allDescription?: string;
};

export type Card = {
  icon?: string;
  title?: string;
  description?: string;
  complete?: Complete;
};

export type KnowledgeProps = {
  KnowledgeCardFather?: Card[];
};

export const Knowledge = ({ KnowledgeCardFather }: KnowledgeProps) => {
  const [selectedCard, setSelectedCard] = useState({});

  const { state, dispatch } = useContext(OnOfContext);

  const handleClick = (card: Card) => {
    setSelectedCard(card);
    dispatch({ type: 'TRIGGER' });
  };

  return (
    <>
      <Styled.Title>Conhecimentos</Styled.Title>
      <Styled.Wrapper>
        {!state.onOff ? (
          KnowledgeCardFather.map((card) => (
            <span key={card.title} onClick={() => handleClick(card)}>
              <KnowledgeCard
                description={card.description}
                title={card.title}
                icon={card.icon}
              ></KnowledgeCard>
            </span>
          ))
        ) : (
          <KnowledgeComplete cardComplete={selectedCard}></KnowledgeComplete>
        )}
      </Styled.Wrapper>
    </>
  );
};
