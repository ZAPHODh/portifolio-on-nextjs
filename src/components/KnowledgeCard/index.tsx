import * as Styled from './styles';
export type KnowledgeCardProps = {
  icon?: string;
  title: string;
  description: string;
};

export const KnowledgeCard = ({
  title,
  icon,
  description,
}: KnowledgeCardProps) => {
  return (
    <Styled.Wrapper>
      <Styled.IconImage src={icon} alt={`icon ${title}`} />
      <h3>{title}</h3>
      <p>{description}</p>
    </Styled.Wrapper>
  );
};
