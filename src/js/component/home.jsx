import React, { useState } from "react";

const Home = () => {
	const [item, setItem] = useState("");
	const [todolist, setTodolist] = useState([]);
	const deletes = (x) => {
		const par = todolist.filter((uniquekeyname) => uniquekeyname !== x);
		setTodolist(par);
	};
	return (
		<div className="Container">
			<div className="input-group mb-3">
				<input
					type="text"
					className="form-control"
					placeholder="Username"
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
				{todolist.map((item, uniquekeyname) => {
					return (
						<li key={uniquekeyname} className="boxtype">
							{item}
							<a
								className="ml-2 btn btn-danger"
								onClick={() => {
									deletes(uniquekeyname);
								}}>
								X
							</a>
						</li>
					);
				})}
			</ul>
			<span>{todolist.length + " items"}</span>
		</div>
	);
};

export default Home;
