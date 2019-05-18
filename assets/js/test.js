
$(function() {
    var form = $("#form-wizard").show();
    form.steps({
        headerTag: "h6",
        bodyTag: "fieldset",
        titleTemplate: '<span class="step-number">#index#</span> #title#',
        onStepChanging: function(event, currentIndex, newIndex) {
            // Always allow going backward even if the current step contains invalid fields!
            if (currentIndex > newIndex) {
                return true;
            }
            // Clean up if user went backward before
            if (currentIndex < newIndex) {
                // To remove error styles
                $(".body:eq(" + newIndex + ") label.invalid-feedback", form).remove();
                $(".body:eq(" + newIndex + ") .invalid-feedback", form).removeClass(".invalid-feedback");
            }
            // Disable validation on fields that are disabled or hidden.
            form.validate().settings.ignore = ":disabled,:hidden";
            // Start validation; Prevent going forward if false
            return form.valid();
        },
        onFinishing: function(event, currentIndex) {
            form.validate().settings.ignore = ":disabled";
            return form.valid();
        },
        onFinished: function(event, currentIndex) {
            alert("Submitted!");
        }
    }).validate({
        errorPlacement: function errorPlacement(error, element) {
            error.insertAfter(element);
        },
        rules: {
            confirm: {
                equalTo: "#password"
            }
        },
        errorClass: 'invalid-feedback',


        validClass: 'valid-feedback',
        highlight: function(e) {
            $(e).addClass("is-invalid").removeClass('is-valid');
        },
        unhighlight: function(e) {
            $(e).removeClass("is-invalid").addClass('is-valid');
        },
    });
});