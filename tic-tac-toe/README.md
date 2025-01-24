# React Tic-Tac-Toe

## Overview
A modern implementation of the classic Tic-Tac-Toe game built with React. This project serves as a practical demonstration of advanced React concepts and state management patterns.

## Key Learning Concepts

### 1. Component Splitting
- Organized code into logical, reusable components (Player, Gameboard, Log, Gameover)
- Improved maintainability through modular architecture
- Enhanced code readability and reusability

### 2. State Management Patterns

#### Updating State Based on Old State
- Implemented proper state updates using previous state values
- Used callback function in setState to ensure state updates are sequential
- Avoided race conditions in state updates

#### Lifting State Up
- Managed game state at the parent (App) level
- Passed state and state-updating functions to child components
- Maintained single source of truth for game data

#### Deriving State
- Computed game status and winner from board state
- Avoided redundant state variables
- Implemented efficient state management by deriving values when possible

### 3. Data Flow & Binding

#### Input Two-Way Binding
- Implemented controlled components for player names
- Synchronized UI with state through value and onChange props
- Maintained consistent state-UI relationship

#### Sharing State Across Components
- Passed relevant state to multiple components
- Maintained consistency across the game interface
- Implemented proper prop drilling when necessary

### 4. Advanced Concepts

#### Computing Derived Values
- Calculated game status based on board state
- Determined winner using winning combinations
- Created clean, efficient state management

#### Object Immutability
- Maintained immutable state updates
- Created new state objects instead of mutating existing ones
- Ensured predictable state behavior