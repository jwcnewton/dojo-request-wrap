define(["dojo/_base/declare", "dojo/request"], (declare, request) => {
    return declare("requestWrap", null, {
        corsEnabledRequest: (uri, dataSet = null) => {
            return request.post(uri, {
                data: dataSet,
                handleAs: "jsonp",
                headers: {
                    "X-Request-With": null
                },
                withCredentials: true
            });
        }
    });
});