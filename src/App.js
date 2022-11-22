import logo from './logo.svg';
import './App.css';
  // 헤더 컴포넌트
 function Header(){
   return <header>
     <h1><a href="/">React  </a></h1>
   </header>
 } 
 // 아티클 컴포넌트 
 function Article(){
  return <article>
            <h2>Welcome</h2>
            Hello, WEB
          </article>
} 

function App() {
  return (
    <div>
       <Header></Header>
       <nav>
         <ol>
           <li><a href="/read/1">html</a></li>
           <li><a href="/read/2">css</a></li>
           <li><a href="/read/3">js</a></li>
         </ol>
       </nav>
       <Article></Article>
    </div>
  );
}

export default App;
