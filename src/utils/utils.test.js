import { describe, test, expect } from "vitest";
import { isValidProduct } from "./utils";

describe("Validación de productos", () => {

  test("reconoce un producto válido", () => {

    const product = {
      nombre: "Casco Veneno",
      descripcion: "Casco personalizado",
      imagen: "/imagen.jpg"
    };

    expect(
      isValidProduct(product)
    ).toBeTruthy();

  });

});
