# Task Management App

This is a task management app that helps you stay organized and keep track of your tasks and projects. With this app, you can easily create, delete and get your tasks.

## Features

- Create tasks: Easily create new tasks.
- Delete task: Delete existing task.
- Get task: Get list of tasks.

## Installation

1. Clone the repository: `git clone https://github.com/your-username/Task-Management-App.git`
2. Install dependencies: `npm install`
3. Build the app: `npm run build`
4. Start the app: `npm run start`

## Here is the curls
Get Tasks
  curl --location 'http://localhost:3000/tasks'

Create Task
  curl --location 'http://localhost:3000/tasks' \
--header 'Content-Type: application/json' \
--data '{
    "description": "Setup 1:1 with Dev Team"
}'

Delete Task
curl --location --request DELETE 'http://localhost:3000/tasks/1'

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
