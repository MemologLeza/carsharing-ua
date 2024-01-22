import "./DropdownFilters.css";
import { Dropdown, Form } from "react-bootstrap";
const DropdownFilters = () => {
  return (
    <div className="catalog-filters">
      <div className="filter-form-field">
        <div className="filter-form-field-label">Brand</div>

        <Dropdown data-bs-theme="light">
          <Dropdown.Toggle
            className="custom-dropdown-button"
            id="dropdown-button-dark-example1"
            variant="secondary"
          >
            Brand
          </Dropdown.Toggle>

          <Dropdown.Menu className="custom-dropdown-menu">
            <Dropdown.Item
              className="custom-dropdown-item"
              href="#/action-1"
              active
            >
              Buick
            </Dropdown.Item>
            <Dropdown.Item className="custom-dropdown-item" href="#/action-2">
              Volvo
            </Dropdown.Item>
            <Dropdown.Item className="custom-dropdown-item" href="#/action-3">
              Hummer
            </Dropdown.Item>
            <Dropdown.Item className="custom-dropdown-item" href="#/action-4">
              Subaru
            </Dropdown.Item>
            <Dropdown.Item className="custom-dropdown-item" href="#/action-2">
              Mitsubishi
            </Dropdown.Item>
            <Dropdown.Item className="custom-dropdown-item" href="#/action-3">
              Nissan
            </Dropdown.Item>
            <Dropdown.Item className="custom-dropdown-item" href="#/action-3">
              Lincoln
            </Dropdown.Item>
            <Dropdown.Item className="custom-dropdown-item" href="#/action-3">
              GMC
            </Dropdown.Item>
            <Dropdown.Item className="custom-dropdown-item" href="#/action-3">
              Hyundai
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div className="filter-form-field">
        <div className="filter-form-field-label">Price</div>

        <Dropdown data-bs-theme="light">
          <Dropdown.Toggle
            className="custom-dropdown-button"
            id="dropdown-button-dark-example1"
            variant="secondary"
          >
            Price
          </Dropdown.Toggle>

          <Dropdown.Menu className="custom-dropdown-menu">
            <Dropdown.Item
              className="custom-dropdown-item"
              href="#/action-1"
              active
            >
              30
            </Dropdown.Item>
            <Dropdown.Item className="custom-dropdown-item" href="#/action-2">
              40
            </Dropdown.Item>
            <Dropdown.Item className="custom-dropdown-item" href="#/action-3">
              50
            </Dropdown.Item>
            <Dropdown.Item className="custom-dropdown-item" href="#/action-4">
              60
            </Dropdown.Item>
            <Dropdown.Item className="custom-dropdown-item" href="#/action-2">
              70
            </Dropdown.Item>
            <Dropdown.Item className="custom-dropdown-item" href="#/action-3">
              80
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};
export default DropdownFilters;
