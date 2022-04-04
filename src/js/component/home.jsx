import React, { useState } from "react";

const Home = () => {
	const [item, setItem] = useState("");
	const [todolist, setTodolist] = useState([]);
	const deletes = (index) => {
		const par = todolist.filter((result, i) => index !== i);
		setTodolist(par);
	};
	return (
		<div className="Container">
			<div className="input-group mb-3">
				<input
					type="text"
					className="form-control"
					placeholder="What needs to be done?"
					onChange={(e) => setItem(e.target.value)}
					value={item}
				/>

				<a
					onClick={() => {
						// setIte;
						if (item === "") return alert("you cant do that Jimbo");
						setTodolist([...todolist, item]);
						setItem("");
						console.log(item);
					}}
					type="btn btn-primary"
					className="input-group-text"
					id="basic-addon1">
					Button
				</a>
			</div>
			<ul>
				{todolist.map((result, index) => {
					return (
						<li key={index} className="boxtype">
							<div>{result}</div>
							<div className="deletekey">
								<a
									className="deletekey btn "
									onClick={() => {
										deletes(index);
									}}>
									X
								</a>
							</div>
						</li>
					);
				})}
			</ul>
			<span>{todolist.length + " items"}</span>
		</div>
	);
};

export default Home;
