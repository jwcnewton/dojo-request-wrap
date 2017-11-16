define(["dojo/_base/declare", "dojo/request"], function(declare, request) {
    return declare("dojoCorsRequest", null, {
        corsEnabledRequest: function(uri, dataSet) {
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
