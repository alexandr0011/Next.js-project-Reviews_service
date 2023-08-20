import { Button, Htag, Ptag, Tag, Rating } from "@/components";

export default function Home() {
  return (
    <div>
      <Htag tag="h1">Заголовок</Htag>
      <Htag tag="h2">Заголовок</Htag>
      <Htag tag="h3">Заголовок</Htag>
      <Button appearance="primary" arrow="right">
        Кнопка
      </Button>
      <Button appearance="ghost" arrow="down">
        Кнопка 2
      </Button>
      <Ptag size="s">Малый текст</Ptag>
      <Ptag>Средний текст</Ptag>
      <Ptag size="l">Большой текст</Ptag>
      <Tag size="s">Ghost</Tag>
      <Tag size="s" color="red">
        Red
      </Tag>
      <Tag size="m" color="green">
        Green
      </Tag>
      <Tag size="m" color="primary">
        Primary
      </Tag>
      <Rating rating={4} />
      <Rating rating={3} isEditable={true} />
    </div>
  );
}
