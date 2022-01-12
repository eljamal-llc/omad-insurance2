import {FC} from 'react'
import { BreadcrumbsProps } from './Breadcrumbs.t'
import {BreadCrumbs,} from './Breadcrumbs.e'
import { Link } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
const  BreadcrumbsBlock: FC<BreadcrumbsProps> = ({link1 , link2 , link3 , url2 , url3}) => {
    // function handleClick(event: any) {
    //     event.preventDefault();
    //     console.info("You clicked a breadcrumb.");
    //   }
      return (
        <BreadCrumbs>
            <Stack spacing={2}>
            <Breadcrumbs separator="›" aria-label="breadcrumb">
                <Link
                underline="hover"
                key="1"
                color="#ffff"
                href="/"
                // onClick={handleClick}
                >
                    <a>
                        {link1}
                    </a>
                </Link>

                <Link
                underline="hover"
                key="2"
                color="#ffff"
                href={url2}
            
                >
                    <a>
                        {link2}
                    </a>
                </Link>
                <Link
                underline="hover"
                color="#ffff"
                key="2"
                href={url3}
        
                >
               {link3}
                </Link>
              
            </Breadcrumbs>
            </Stack>
      </BreadCrumbs>
      )
   
}
export default BreadcrumbsBlock