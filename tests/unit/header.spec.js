import { mount } from "@vue/test-utils";
import Header from "@/components/layout/Header.vue";

describe("Header Component unit tests: ", () => {
  // Test to check its instance
  test("is a vue instance", () => {
    const wrapper = mount(Header);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  // check that he is in the correct route
  test("different view is shown when header links is clicked", () => {
    const wrapper = mount(Header);
    wrapper.find("#todos").trigger("click");
    expect(wrapper.vm.route).toBe("Todos");
    wrapper.find("#home").trigger("click");
    expect(wrapper.vm.route).toBe("Home");
    wrapper.find("#done").trigger("click");
    expect(wrapper.vm.route).toBe("Done");
  });
});
