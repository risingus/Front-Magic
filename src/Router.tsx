import { Route, Routes } from 'react-router-dom';
import { DefaultLayout } from './layouts/DefaultLayout';
import { Button } from './components/Button';
import { ButtonWithRipple } from './components/ButtonWithRipple';
import { HackerText } from './components/HackerText';
import { Slider } from './components/Slider';
import { MouseBlob } from './components/MouseBlob';


export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<div><h3>home</h3></div>} />
        <Route path='hacketText' element={<HackerText />} />
        <Route path='image-slider' element={<Slider />} />
        <Route path='mouse-blob' element={<MouseBlob />} />
        <Route
          path='buttons'
          element={
            <>
              <ButtonWithRipple />
              <Button>
                Hover me
              </Button>
            </>
          }
        />
      </Route>
    </Routes>
  )
}