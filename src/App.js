
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import styled from 'styled-components';
import axios from 'axios'

import { LazyLoadImage } from 'react-lazy-load-image-component';
import Checkbox from './components/Checkbox';
import Button from './components/Button';



const Container = styled.div`
  max-width: 350px;
  margin-inline: auto;
  margin-top: 100px;
  background-color:white;
  min-height: 400px;
  padding: 20px 10px
`


function App() {

  const [image, setImage] = React.useState({
    id: "5n6",
    url: "/cat.png",
    width: 200,
    height: 50
  });

  const ref = React.useRef(null);

  const [enabled, setEnabled] = React.useState(false);
  const [autoRefetch, setAutoRefetch] = React.useState(false);

  const [loading, setLoading] = React.useState(false)

  const api = 'https://api.thecatapi.com/v1/images/search';


  const getCat = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(api);
      setImage(data[0]);
      setLoading(false);
    } catch (error) {
      alert('Что-то пошло не так (');
      console.log(error);
    } finally {
      setLoading(false)
    }
  }

  const getCatEveryFiveSecond = (checked) => {
    if (checked) {
      getCat()
      ref.current = setInterval(getCat, 5000)
    } else {
      clearInterval(ref.current);
    }
  }

  const onChangeAutoRefresh = (event) => {
    getCatEveryFiveSecond(event.target.checked)
    setAutoRefetch(event.target.checked);
  }


  return (
    <div className="App">
      <Navbar />
      <Container>
        <div>
          <Checkbox checked={enabled} onChange={e => setEnabled(e.target.checked)} content="Enabled" />
          <Checkbox checked={autoRefetch} disabled={!enabled} onChange={onChangeAutoRefresh} content="Auto-refresh every 5 second" />

          <Button onClick={getCat} disabled={loading || !enabled || autoRefetch}>
            {loading ? 'loading...' : 'Get cat'}
          </Button>

        </div>


        <LazyLoadImage
          style={{ marginTop: '15px' }}
          alt='cat'
          effect="blur"
          src={image.url}
          height={'auto'}
          width={'100%'}
        />

      </Container>
    </div>
  );
}

export default App;
