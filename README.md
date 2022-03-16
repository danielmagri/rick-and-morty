# Rick and Morty

A simple web application that consume the [The Rick and Morty API](https://rickandmortyapi.com/) and present the list of characters and them details.

## Technologies

Project made with React (Typescript), using:

- Redux
- Redux Toolkit
- Material-UI
- Hooks
- Axios
- React router dom


## Architecture

### core (folder)
| Folder | Description |
| ------ | ----------- |
| context | Redux files |
| env | Environment variables |
| factories | Dependency Injection |
| models | Generic and shared models |
| router | Router main component |
| theme | Main theme values |

### infra (folder)

Clean Architecture infra layer, handle access of external APIs.

### data (folder)

Clean Architecture data layer, with the repositories that consume the endpoints.

### domain (folder)

Clean Architecture domain layer, with the models and usecases.

### presentation (folder)

Clean Architecture presentation layer, responsible by the view and components.

| Folder | Description |
| ------ | ----------- |
| assets | The assets used by the application |
| components | Components shared by pages |
| pages | Pages components |

## Preview

You can access the running project [here](https://danielmagri.github.io/rick-and-morty)
