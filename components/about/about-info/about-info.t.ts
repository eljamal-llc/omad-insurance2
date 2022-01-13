export interface AboutInfoProps {
  dataLeft?: IAIData[] | [];
  dataRight: {
    id: number;
    title: string;
    description: string;
    slug: string;
  };
}
export interface IAIData {
  id: number;
  title: string;
  description: string;
  slug: string;
  files: [];
}
