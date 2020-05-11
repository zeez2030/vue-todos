import { mount } from "@vue/test-utils";
import Task from "@/components/Todo.vue";

describe("Todo Component unit tests: ", () => {
  // Test to check its instance
  test("is a vue instance", () => {
    const wrapper = mount(Task, {
      propsData: {
        description: "Todo 1",
        completed: false,
        page: "todo"
      }
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  //   Check the component renders the description
  test("renders todo description", () => {
    const todoName = "Todo 1";
    const wrapper = mount(Task, {
      propsData: {
        description: todoName,
        completed: false,
        page: "todo"
      }
    });
    expect(wrapper.html()).toContain(todoName);
  });

  //   check that the delete function is fired when pressing the delete button
  test("delete the todo when the button is clicked", () => {
    const wrapper = mount(Task, {
      propsData: {
        description: "todo1",
        completed: false,
        page: "todo"
      }
    });

    const deleteTask = jest.fn();
    wrapper.setMethods({
      deleteTask: deleteTask
    });

    wrapper.find("#delete").trigger("click");
    expect(deleteTask).toBeCalled();
  });

  // check that the function that adds the finished todo to done todos is fired on checking the checkbox
  test("check when clicked on checkbox the onCheck box function is called ", () => {
    const wrapper = mount(Task, {
      propsData: {
        description: "todo1",
        completed: false,
        page: "todo"
      }
    });

    const onCheckBox = jest.fn();
    wrapper.setMethods({
      onCheckBox
    });

    wrapper.find("#checkbox").trigger("click");
    expect(onCheckBox).toBeCalled();
  });

  // check if the startEditing function is fired when the edit icon is pressed
  test("check when clicked on edit icon the startediting function is fired ", () => {
    const wrapper = mount(Task, {
      propsData: {
        description: "todo1",
        completed: false,
        page: "todo"
      }
    });

    const startEditing = jest.fn();
    wrapper.setMethods({
      startEditing
    });

    wrapper.find("#startedit").trigger("click");
    expect(startEditing).toBeCalled();
  });
});
