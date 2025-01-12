"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Post = function () {
    return (react_1["default"].createElement("div", { className: "flex justify-center items-center " },
        react_1["default"].createElement("div", { className: "bg-white max-w-md border-b border-b-gray-300 overflow-hidden" },
            react_1["default"].createElement("div", { className: "p-4 flex items-center" },
                react_1["default"].createElement("img", { alt: "Profile picture", className: "w-10 h-10 rounded-full", src: "https://placehold.co/40x40" }),
                react_1["default"].createElement("div", { className: "ml-3" },
                    react_1["default"].createElement("span", { className: "font-semibold text-sm" }, "lavieenbluu"),
                    react_1["default"].createElement("span", { className: "text-gray-500 text-xs" }, "\u2022 6d")),
                react_1["default"].createElement("i", { className: "fas fa-ellipsis-h ml-auto" })),
            react_1["default"].createElement("img", { alt: "Person in white dress sitting against a red background", className: "w-full", src: "https://placehold.co/500x500" }),
            react_1["default"].createElement("div", { className: "p-4" },
                react_1["default"].createElement("div", { className: "flex items-center mb-2" },
                    react_1["default"].createElement("i", { className: "far fa-heart text-2xl mr-3" }),
                    react_1["default"].createElement("i", { className: "far fa-comment text-2xl mr-3" }),
                    react_1["default"].createElement("i", { className: "far fa-paper-plane text-2xl" }),
                    react_1["default"].createElement("i", { className: "far fa-bookmark text-2xl ml-auto" })),
                react_1["default"].createElement("p", { className: "font-semibold text-sm mb-2" }, "531,878 likes"),
                react_1["default"].createElement("p", { className: "text-sm" },
                    react_1["default"].createElement("span", { className: "font-semibold" }, "lavieenbluu"),
                    react_1["default"].createElement("a", { className: "text-blue-500", href: "#" }, "@ahc.official"),
                    react_1["default"].createElement("a", { className: "text-blue-500", href: "#" }, "@ellekorea")),
                react_1["default"].createElement("p", { className: "text-gray-500 text-sm mb-2" }, "View all 1,811 comments"),
                react_1["default"].createElement("p", { className: "text-gray-500 text-sm" }, "Add a comment...")))));
};
exports["default"] = Post;
