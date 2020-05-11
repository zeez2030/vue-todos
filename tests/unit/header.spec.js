import { mount } from "@vue/test-utils";

import Header from "@/components/layout/Header.vue";

describe("Header Component unit tests: ", () => {
  // Test to check its instance
  test("is a vue instance", () => {
    const wrapper = mount(Header);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
