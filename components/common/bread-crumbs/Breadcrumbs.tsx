import {FC} from 'react'
import { BreadcrumbsProps } from './Breadcrumbs.t'
import {BreadCrumbs,} from './Breadcrumbs.e'
import { Link } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
const  BreadcrumbsBlock: FC<BreadcrumbsProps> = () => {
    function handleClick(event: any) {
        event.preventDefault();
        console.info("You clicked a breadcrumb.");
      }
      return (
        <BreadCrumbs>
            <Stack spacing={2}>
            <Breadcrumbs separator="›" aria-label="breadcrumb">
                <Link
                underline="hover"
                key="1"
                color="#ffff"
                href="/"
                onClick={handleClick}
                >
                Главная
                </Link>

                {/* <Link
                underline="hover"
                key="2"
                color="inherit"
                href="/getting-started/installation/"
                onClick={handleClick}
                >
                Магазин полисов
                </Link> */}

                <Typography key="3" color="#fff">
                Магазин полисов
                </Typography>
            </Breadcrumbs>
            </Stack>
      </BreadCrumbs>
      )
   
}
export default BreadcrumbsBlock