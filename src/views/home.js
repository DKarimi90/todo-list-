import Footer from "../Component /footer";
import NavBar from "../Component /navBar";
import TodoList from "../Component /toDoList";


function Home(){
    return(
        <div>
            <NavBar />
            <TodoList />
            <TodoList />
            <TodoList />
            <TodoList />
            <TodoList />
            <Footer />
        </div>

    )
}

export default Home; 