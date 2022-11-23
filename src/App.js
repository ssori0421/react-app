import logo from './logo.svg';
import './App.css';
// 헤더 컴포넌트
function Header(props) {
  console.log('props', props, props.title);
  return (
    <header>
      <h1>
        <a href='/'>{props.title}</a>
      </h1>
    </header>
  );
}
//네비게이션 컴포넌트
function Nav(props) {
  const lis = [];
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    console.log(t);
    lis.push(
      <li key={t.id}>
        <a href={'/read/' + t.id}>{t.title}</a>
      </li>
    );
  }
  return (
    <nav>
      <ol>{lis}</ol>
    </nav>
  );
}
// 아티클 컴포넌트
function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}

function App() {
  const topics = [
    { id: 1, title: 'html', body: 'html is ...' },
    { id: 2, title: 'css', body: 'css is ...' },
    { id: 3, title: 'javascript', body: 'javascript is ...' },
  ];
  return (
    <div>
      <Header title='WEB'></Header>
      <Nav topics={topics}></Nav>
      <Article title='welcome' body='Hello, WEB'></Article>
    </div>
  );
}

export default App;
