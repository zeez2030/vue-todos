import { mount } from "@vue/test-utils";
import CreateTodo from "@/components/CreateTodo.vue";

describe("Create Todo Component unit tests: ", () => {
  // Test to check its instance
  test("is a vue instance", () => {
    const wrapper = mount(CreateTodo, {
      propsData: {
        newTodo: ""
      }
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  // check that the form prevent default and fire the function addTodo
  test("form prevent default and fire addTodo function", () => {
    const wrapper = mount(CreateTodo);
    const addTodo = jest.fn();
    wrapper.setMethods({
      addTodo
    });

    wrapper.find("form").trigger("submit.prevent");
    expect(addTodo).toBeCalled();
  });

  // newTodo value should be equal the input value
  test("check input value equals to new todo value", () => {
    const wrapper = mount(CreateTodo);

    wrapper.find("[data-newtodo]").setValue("alice");
    expect(wrapper.vm.newTodo).toBe("alice");
  });
});
