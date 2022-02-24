export interface MissionProps {
  data?: dataCont;
  links : any
}

export interface dataCont {
  title  : string ,
  text : string,
  image : string | any ,
  main_image:string | any,
  full_text:string

}