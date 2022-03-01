import {FC, useEffect, useState} from 'react'
import { BreadcrumbsProps } from './Breadcrumbs.t'
import {BreadCrumbs,} from './Breadcrumbs.e'
import { Link } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { api } from '../../../services/api';
import { useRouter } from 'next/router';
import parse from "html-react-parser";


const  BreadcrumbsBlock: FC<BreadcrumbsProps> = ({
    breadcrumb
}) => {
    const router = useRouter()
    const {id }= router.query

    const [pageData, setPageData] = useState([]);

      return (
        <BreadCrumbs>
            <Stack spacing={2}>
            <Breadcrumbs separator="›" aria-label="breadcrumb">
                    {/* @ts-ignore */}
                   {breadcrumb?.map((value:any , index:any) => 
                       
                            (
                                <Link underline="hover" key="1" color="#ffff"
                                    // @ts-ignore
                                    href={value.slug + '?id=' + value.id}
                                    // onClick={handleClick}
                                    >
                                        {/* @ts-ignore */}
                                        <a>
                                        {parse(value.title)}
                                        </a>
                                    </Link>
                                    
                                
                            )
                        )
                        }
                    
                   
                

              
            </Breadcrumbs>
            </Stack>
      </BreadCrumbs>
      
      )
   
}
export default BreadcrumbsBlock