import Vue from "vue";
import VueTailwind from "vue-tailwind";
import { TRichSelect } from "vue-tailwind/dist/components";

const settings = {
  TRichSelect: {
    component: TRichSelect,
    // Fixed classes shared by all the variants
    props: {
      fixedClasses: {
        wrapper: "relative w-full",
        buttonWrapper: "inline-block relative w-full",
        selectButton:
          "w-full flex text-left justify-between items-center px-3 py-2 transition duration-100 ease-in-out border rounded shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed",
        selectButtonLabel: "block truncate",
        selectButtonPlaceholder: "block truncate text-sm",
        selectButtonIcon: "fill-current flex-shrink-0 ml-1 h-4 w-4",
        // // selectButtonClearButton:
        // // "rounded flex flex-shrink-0 items-center justify-center absolute right-0 top-0 m-2 h-6 w-6 transition duration-100 ease-in-out",
        // selectButtonClearIcon: "fill-current h-3 w-3",
        dropdown:
          "absolute w-full z-10 -mt-1 absolute border-b border-l border-r rounded-b shadow-sm z-10",
        dropdownFeedback: "",
        loadingMoreResults: "",
        optionsList: "overflow-auto",
        searchWrapper: "inline-block w-full",
        searchBox: "inline-block w-full",
        optgroup: "",
        option: "cursor-pointer",
        disabledOption: "opacity-50 cursor-not-allowed",
        highlightedOption: "cursor-pointer",
        selectedOption: "cursor-pointer",
        selectedHighlightedOption: "cursor-pointer",
        optionContent: "",
        optionLabel: "truncate block text-sm",
        selectedIcon: "fill-current h-4 w-4",
        enterClass: "",
        enterActiveClass: "",
        enterToClass: "",
        leaveClass: "",
        leaveActiveClass: "",
        leaveToClass: "",
      },
      // Classes used by default (when no variant is applied)
      classes: {
        wrapper: "",
        buttonWrapper: "",
        selectButton: "bg-white border-gray-300",
        selectButtonLabel: "",
        selectButtonPlaceholder: "text-gray-400",
        selectButtonIcon: "text-gray-600",
        selectButtonClearButton: "hover:bg-blue-100 text-gray-600",
        selectButtonClearIcon: "h-4 w-4",
        dropdown: "bg-white border-gray-300",
        dropdownFeedback: "pb-2 px-3 text-gray-400 text-sm",
        loadingMoreResults: "pb-2 px-3 text-gray-400 text-sm",
        optionsList: "",
        searchWrapper: "p-2 placeholder-gray-400",
        searchBox:
          "px-3 py-2 bg-gray-50 text-sm rounded border focus:outline-none focus:shadow-outline border-gray-300",
        optgroup: "text-gray-400 uppercase text-xs py-1 px-2 font-semibold",
        option: "px-3",
        disabledOption: "",
        highlightedOption:
          "bg-slate-800 text-white transition-colors duration-200 pl-3",
        selectedOption: "font-semibold bg-slate-900 text-white pl-3",
        selectedHighlightedOption:
          "font-semibold bg-slate-800 text-white transition-colors duration-200 pl-3",
        optionContent: "flex justify-between items-center p-2",
        optionLabel: "",
        selectedIcon: "",
        enterClass: "opacity-0",
        enterActiveClass: "transition ease-out duration-100",
        enterToClass: "opacity-100",
        leaveClass: "opacity-100",
        leaveActiveClass: "transition ease-in duration-75",
        leaveToClass: "opacity-0",
        selectButtonTagWrapper: "flex flex-wrap items-center",
        selectButtonTagText: "pl-3 pr-2 text-xs",
        selectButtonTag:
          "h-8 bg-slate-900 block flex items-center text-white rounded-md mr-1",
        selectButtonTagDeleteButton:
          "bg-slate-900 h-full px-2 inline-flex items-center rounded-r-md hover:bg-slate-800 transition-colors duration-200",
        selectButtonTagDeleteButtonIcon: "h-3 w-3",
      },
    },
  },
};

Vue.use(VueTailwind, settings);
