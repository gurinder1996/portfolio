(function() {
    $(document).ready(function() {
        return $('#contact-form').submit(function(e) {
            var email, message, name;
            name = document.getElementById('inputName');
            email = document.getElementById('inputEmail');
            message = document.getElementById('inputMessage');
            if (!name.value || !email.value || !message.value) {
                alertify.error('Please check your entries');
                return false;
            } else {
                $.ajax({
                    method: 'POST',
                    url: '//formspree.io/gurindersingh13@outlook.com',
                    data: $('#contact-form').serialize(),
                    datatype: 'json'
                });
                e.preventDefault();
                $(this).get(0).reset();
                return alertify.success('Message sent');
            }
        });
    });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSxDQUFBLENBQUUsUUFBRixDQUFXLENBQUMsS0FBWixDQUFrQixRQUFBLENBQUEsQ0FBQTtXQUNoQixDQUFBLENBQUUsZUFBRixDQUFrQixDQUFDLE1BQW5CLENBQTBCLFFBQUEsQ0FBQyxDQUFELENBQUE7QUFDeEIsVUFBQSxLQUFBLEVBQUEsT0FBQSxFQUFBO01BQUEsSUFBQSxHQUFPLFFBQVEsQ0FBQyxjQUFULENBQXdCLFdBQXhCO01BQ1AsS0FBQSxHQUFRLFFBQVEsQ0FBQyxjQUFULENBQXdCLFlBQXhCO01BQ1IsT0FBQSxHQUFVLFFBQVEsQ0FBQyxjQUFULENBQXdCLGNBQXhCO01BQ1YsSUFBRyxDQUFDLElBQUksQ0FBQyxLQUFOLElBQWUsQ0FBQyxLQUFLLENBQUMsS0FBdEIsSUFBK0IsQ0FBQyxPQUFPLENBQUMsS0FBM0M7UUFDRSxRQUFRLENBQUMsS0FBVCxDQUFlLDJCQUFmO0FBQ0EsZUFBTyxNQUZUO09BQUEsTUFBQTtRQUlFLENBQUMsQ0FBQyxJQUFGLENBQ0U7VUFBQSxNQUFBLEVBQVEsTUFBUjtVQUNBLEdBQUEsRUFBSyxtQ0FETDtVQUVBLElBQUEsRUFBTSxDQUFBLENBQUUsZUFBRixDQUFrQixDQUFDLFNBQW5CLENBQUEsQ0FGTjtVQUdBLFFBQUEsRUFBVTtRQUhWLENBREY7UUFLQSxDQUFDLENBQUMsY0FBRixDQUFBO1FBQ0EsQ0FBQSxDQUFFLElBQUYsQ0FBTyxDQUFDLEdBQVIsQ0FBWSxDQUFaLENBQWMsQ0FBQyxLQUFmLENBQUE7ZUFDQSxRQUFRLENBQUMsT0FBVCxDQUFpQixjQUFqQixFQVhGOztJQUp3QixDQUExQjtFQURnQixDQUFsQjtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkgLT5cbiAgJCgnI2NvbnRhY3QtZm9ybScpLnN1Ym1pdCAoZSkgLT5cbiAgICBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0TmFtZScpXG4gICAgZW1haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXRFbWFpbCcpXG4gICAgbWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dE1lc3NhZ2UnKVxuICAgIGlmICFuYW1lLnZhbHVlIG9yICFlbWFpbC52YWx1ZSBvciAhbWVzc2FnZS52YWx1ZVxuICAgICAgYWxlcnRpZnkuZXJyb3IgJ1BsZWFzZSBjaGVjayB5b3VyIGVudHJpZXMnXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICBlbHNlXG4gICAgICAkLmFqYXhcbiAgICAgICAgbWV0aG9kOiAnUE9TVCdcbiAgICAgICAgdXJsOiAnLy9mb3Jtc3ByZWUuaW8vbmFtZUB5b3VyZW1haWwuY29tJ1xuICAgICAgICBkYXRhOiAkKCcjY29udGFjdC1mb3JtJykuc2VyaWFsaXplKClcbiAgICAgICAgZGF0YXR5cGU6ICdqc29uJ1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAkKHRoaXMpLmdldCgwKS5yZXNldCgpXG4gICAgICBhbGVydGlmeS5zdWNjZXNzICdNZXNzYWdlIHNlbnQnIl19
//# sourceURL=coffeescript