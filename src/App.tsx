import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import CheckIcon from '@mui/icons-material/Check';
import { Typography } from '@mui/material';

const LOGO_BASE_URL = 'http://jleague.r10s.jp/img/common'

type ImageElement = {
  url: string,
  title: string,
  width: number,
  checked: boolean,
}

const images: ImageElement[] = [
  {
    url: `${LOGO_BASE_URL}/img_club_sapporo.png`,
    title: 'コンサドーレ札幌',
    width: 300,
    checked: false,
  },
  {
    url: `${LOGO_BASE_URL}/img_club_kashima.png`,
    title: '鹿島アントラーズ',
    width: 300,
    checked: false,
  },
  {
    url: `${LOGO_BASE_URL}/img_club_urawa.png`,
    title: '浦和レッズ',
    width: 300,
    checked: false,
  },
  {
    url: `${LOGO_BASE_URL}/img_club_kashiwa.png`,
    title: '柏レイソル',
    width: 300,
    checked: false,
  },
  {
    url: `${LOGO_BASE_URL}/img_club_ftokyo.png`,
    title: 'ＦＣ東京',
    width: 300,
    checked: false,
  },
  {
    url: `${LOGO_BASE_URL}/img_club_kawasakif.png`,
    title: '川崎フロンターレ',
    width: 300,
    checked: false,
  },
  {
    url: `${LOGO_BASE_URL}/img_club_yokohamafm.png`,
    title: '横浜Ｆ・マリノス',
    width: 300,
    checked: false,
  },
  {
    url: `${LOGO_BASE_URL}/img_club_shonan.png`,
    title: '湘南ベルマーレ',
    width: 300,
    checked: false,
  },
  {
    url: `${LOGO_BASE_URL}/img_club_shimizu.png`,
    title: '清水エスパルス',
    width: 300,
    checked: false,
  },
  {
    url: `${LOGO_BASE_URL}/img_club_iwata.png`,
    title: 'ジュビロ磐田',
    width: 300,
    checked: false,
  },
  {
    url: `${LOGO_BASE_URL}/img_club_nagoya.png`,
    title: '名古屋グランパス',
    width: 300,
    checked: false,
  },
  {
    url: `${LOGO_BASE_URL}/img_club_kyoto.png`,
    title: '京都サンガF.C.',
    width: 300,
    checked: false,
  },
  {
    url: `${LOGO_BASE_URL}/img_club_gosaka.png`,
    title: 'ガンバ大阪',
    width: 300,
    checked: false,
  },
  {
    url: `${LOGO_BASE_URL}/img_club_cosaka.png`,
    title: 'セレッソ大阪',
    width: 300,
    checked: false,
  },
  {
    url: `${LOGO_BASE_URL}/img_club_kobe.png`,
    title: 'ヴィッセル神戸',
    width: 300,
    checked: false,
  },
  {
    url: `${LOGO_BASE_URL}/img_club_hiroshima.png`,
    title: 'サンフレッチェ広島',
    width: 300,
    checked: false,
  },
  {
    url: `${LOGO_BASE_URL}/img_club_fukuoka.png`,
    title: 'アビスパ福岡',
    width: 300,
    checked: false,
  },
  {
    url: `${LOGO_BASE_URL}/img_club_tosu.png`,
    title: 'サガン鳥栖',
    width: 300,
    checked: false,
  },
]

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 300,
  // [theme.breakpoints.down('sm')]: {
  //   width: '100% !important', // Overrides inline-style
  //   height: 100,
  // },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    // '& .MuiImageBackdrop-root': {
    //   opacity: 0.15,
    // },
    // '& .MuiImageMarked-root': {
    //   opacity: 0,
    // },
    // '& .MuiTypography-root': {
    //   border: '4px solid currentColor',
    // },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const ImageChecked = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
  backgroundColor: 'rgba(0, 0, 0, 0.3)'
}));

const App = () => {
  const [logoImages, setLogoImages] = useState(images);

  const handleOnClick = (item: ImageElement) => {
    const tmpLogoImages = [...logoImages];
    const target = tmpLogoImages.find((v) => v.title === item.title);
    if (target) {
      target.checked = !target.checked;
    }

    for (const image of tmpLogoImages) {
      if (image.title !== item.title) {
        image.checked = false;
      }
    }
    setLogoImages(tmpLogoImages);
  }

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
      {logoImages.map((image) => (
        <ImageButton
          key={image.title}
          style={{
            width: image.width,
          }}
          onClick={() => handleOnClick(image)}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }}>
            {image.checked && (
              <ImageChecked>
                <CheckIcon sx={{ fontSize: 120 }} />
              </ImageChecked>
            )}
          </ImageSrc>
        </ImageButton>
      ))}
    </Box>
  );
}

export default App;
