import { render, screen, fireEvent } from "@testing-library/react";
import Hello from "./Hello";

describe("Hello component", () => {

    test("render hello header", () => {
        render(<Hello />);
        const helloheader = screen.getByText("Hello world!");
        expect(helloheader).toBeInTheDocument();
    });

    test("render weather elelment", () => {
        render(<Hello/>);
        const weather = screen.getByText('It is good weather today');
        expect(weather).toBeInTheDocument();
    })

    test("render No House", () => {
        render(<Hello/>);
        const noHouse = screen.getByText('No House');
        expect(noHouse).toBeInTheDocument();
    })

    test("render House on Click", () => {
        render(<Hello/>);
        const button = screen.getByRole('button');
        fireEvent.click(button)
        const House = screen.getByText('House');
        expect(House).toBeInTheDocument();
    })

    test("do not render No House on Click", () => {
        render(<Hello/>);
        const button = screen.getByRole('button');
        fireEvent.click(button);
        const noHouse = screen.queryByText('No House');
        expect(noHouse).toBeNull();
    })
})
